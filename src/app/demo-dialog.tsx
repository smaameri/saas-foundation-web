"use client";

import { useRef, useState } from "react";

const DEMO_EMAIL = "admin@example.test";
const DEMO_PASSWORD = "Demo1234!";
const DEMO_URL = `https://demo.saasfoundation.dev/login?email=${encodeURIComponent(DEMO_EMAIL)}`;

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="size-5 fill-none stroke-current stroke-2"
    >
      <path d="m5 5 10 10M15 5 5 15" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="size-4 fill-none stroke-current stroke-2"
    >
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

export default function DemoDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [copyFailed, setCopyFailed] = useState(false);
  const [copied, setCopied] = useState(false);

  function openDialog() {
    setCopyFailed(false);
    setCopied(false);
    dialogRef.current?.showModal();
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  async function copyPassword() {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(DEMO_PASSWORD);
        return;
      } catch {
        // Fall back for browsers that expose the API but deny permission.
      }
    }

    const input = document.createElement("textarea");
    input.value = DEMO_PASSWORD;
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();
    const copied = document.execCommand("copy");
    input.remove();

    if (!copied) throw new Error("Clipboard access was denied");
  }

  async function copyPasswordAndOpenDemo() {
    try {
      await copyPassword();
      setCopyFailed(false);
      window.open(DEMO_URL, "_blank", "noopener,noreferrer");
      closeDialog();
    } catch {
      setCopyFailed(true);
    }
  }

  async function copyPasswordOnly() {
    try {
      await copyPassword();
      setCopyFailed(false);
      setCopied(true);
    } catch {
      setCopyFailed(true);
      setCopied(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={openDialog}
        className="flex cursor-pointer items-center gap-2 transition-colors hover:text-white"
      >
        <span className="size-1.5 rounded-full bg-primary" />
        Live demo
      </button>

      <dialog
        ref={dialogRef}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
        onClose={() => {
          setCopyFailed(false);
          setCopied(false);
        }}
        className="m-auto w-[calc(100%-2rem)] max-w-md rounded-3xl border border-white/10 bg-[#101513] p-0 text-[#f3f7f6] shadow-[0_30px_100px_rgba(0,0,0,0.75)] backdrop:bg-black/75 backdrop:backdrop-blur-sm"
      >
        <div className="p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold tracking-[-0.02em]">
                Live demo
              </h2>
              <p className="mt-2 max-w-sm leading-7 text-[#9aa8a4]">
                The demo email will be filled in automatically. Copy the
                password, then paste it on the sign-in screen.
              </p>
            </div>
            <button
              type="button"
              onClick={closeDialog}
              aria-label="Close demo dialog"
              className="grid size-9 shrink-0 cursor-pointer place-items-center rounded-full text-[#899792] transition hover:bg-white/10 hover:text-white"
            >
              <CloseIcon />
            </button>
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#74827e]">
              Demo password
            </span>
            <div className="mt-2 flex items-center justify-between gap-4">
              <code className="select-all font-mono text-base text-white">
                {DEMO_PASSWORD}
              </code>
              <button
                type="button"
                onClick={copyPasswordOnly}
                className="cursor-pointer text-sm font-medium text-primary-light transition hover:text-white"
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          {copyFailed && (
            <p role="alert" className="mt-3 text-sm text-[#ff9c9c]">
              Your browser blocked clipboard access. Select and copy the
              password above, then try again.
            </p>
          )}

          <button
            type="button"
            onClick={copyPasswordAndOpenDemo}
            className="mt-6 inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 font-semibold text-[#071c19] shadow-[0_12px_30px_rgba(0,187,167,0.2)] transition hover:bg-primary-dark hover:text-white"
          >
            Copy password &amp; open demo <ArrowIcon />
          </button>
        </div>
      </dialog>
    </>
  );
}

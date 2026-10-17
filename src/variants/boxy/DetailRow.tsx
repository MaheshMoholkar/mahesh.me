"use client";

import { useId, useRef, type ReactNode } from "react";

/**
 * One compact row inside a box. The title is a button whose ::after covers the whole row,
 * so the row opens a modal <dialog> on click while links in `aside` stay real links above it.
 * The dialog is always rendered (closed), so its text stays in the server HTML.
 */
export function DetailRow({
  lead,
  title,
  sub,
  desc,
  aside,
  modalSub,
  actions,
  wide,
  children,
}: {
  lead?: ReactNode;
  title: string;
  sub?: string;
  desc?: string;
  aside?: ReactNode;
  modalSub?: string;
  /** Links shown in the modal header, beside the close button. */
  actions?: ReactNode;
  /** Wider modal, for a media + text split. */
  wide?: boolean;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const id = useId();

  // showModal() focuses the first focusable child, which is an external link when the header has actions
  const open = () => {
    ref.current?.showModal();
    closeRef.current?.focus();
  };

  return (
    <div className="row">
      <div className="row__body">
        {lead}
        <div className="row__main">
          <h3 className="row__title">
            <button type="button" className="row__open" aria-haspopup="dialog" aria-controls={id} onClick={open}>
              {title}
            </button>
          </h3>
          {sub ? <p className="row__sub">{sub}</p> : null}
          {desc ? <p className="row__desc">{desc}</p> : null}
        </div>
      </div>
      {aside ? <div className="row__aside">{aside}</div> : null}
      <span className="row__plus" aria-hidden="true">
        +
      </span>
      <dialog
        id={id}
        ref={ref}
        className={wide ? "modal modal--wide" : "modal"}
        aria-labelledby={`${id}-title`}
        // A click on the dialog element itself (not its children) is a click on the backdrop
        onClick={(e) => {
          if (e.target === e.currentTarget) e.currentTarget.close();
        }}
      >
        <div className="modal__head">
          <div className="modal__heading">
            <h3 id={`${id}-title`} className="modal__title bx-wide">
              {title}
            </h3>
            {modalSub ? <p className="modal__sub">{modalSub}</p> : null}
          </div>
          {actions ? <div className="modal__links">{actions}</div> : null}
          <button ref={closeRef} type="button" className="modal__close" aria-label="Close" onClick={() => ref.current?.close()}>
            ×
          </button>
        </div>
        <div className="modal__body">{children}</div>
      </dialog>
    </div>
  );
}

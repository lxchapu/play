import { QRCodeSVG } from "qrcode.react";

export const Qrcode = ({ data }: { data: string }) => {
  return (
    <div className="bg-slate-800 text-slate-400 p-1">
      <QRCodeSVG
        value={data}
        size={48}
        bgColor="transparent"
        fgColor="currentColor"
      />
    </div>
  );
};

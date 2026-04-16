/**
 * 合规声明
 */
export function ComplianceDisclaimer() {
  return (
    <div className="py-12 px-4 text-center animate-[fadeIn_1s_ease-out_both_0.8s]">
      <p className="text-[10px] sm:text-xs font-mono text-slate-600/60 leading-relaxed max-w-2xl mx-auto">
        {
          "[SYS_NOTE] 依据赛博公约合规要求披露：本系统为纯娱乐性质的性格测试终端。"
        }
        <br />
        {"所有“诊断”、“病理”、“确诊”等术语均属虚构的赛博朋克世界观设定。"}
        <br />
        {
          "本测试结果未经人类医学伦理委员会审批，不具备任何心理学或医学临床参考价值。请勿将其作为正规医疗用途。"
        }
      </p>
    </div>
  );
}

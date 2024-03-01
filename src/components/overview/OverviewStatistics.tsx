export const OverviewStatistics = () => {
  function formatCurrency(value: number): string {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row">
        <div className="stats w-full flex rounded-none border-white/10 border">
          <div className="stat place-items-center">
            <div className="stat-title">Antes</div>
            <div className="stat-value">1000</div>
            <div className="stat-desc">Jan 1st</div>
          </div>
        </div>

        <div className="stats w-full flex rounded-none border-white/10 border">
          <div className="stat place-items-center">
            <div className="stat-title">Meta</div>
            <div className="stat-value">2000</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="w-full stats flex rounded-none border-white/10 border">
          <div className="stat place-items-center">
            <div className="stat-title">Agora</div>
            <div className="stat-value">1500</div>
            <div className="flex gap-3">
              <div className="stat-desc">Feb 1st</div>
              <div className="stat-desc">•</div>
              <div className="stat-desc">+10%</div>
            </div>
          </div>
        </div>

        <div className="stats w-full flex rounded-none border-white/10 border">
          <div className="stat place-items-center">
            <div className="stat-title">Potencial de lucro</div>
            <div className="stat-value">{formatCurrency(171142)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

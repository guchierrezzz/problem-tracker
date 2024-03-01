export const RadioGroup = () => {
  return (
    <div className="flex gap-5 items-center justify-center">
      <input
        className="tracking-widest uppercase join-item btn btn-primary"
        type="radio"
        name="options"
        aria-label="Ações"
      />
      <input
        className="tracking-widest uppercase join-item btn btn-primary"
        type="radio"
        name="options"
        aria-label="Dashboards"
      />
      <input
        className="tracking-widest uppercase join-item btn btn-primary"
        type="radio"
        name="options"
        aria-label="Evolução"
      />
    </div>
  );
};

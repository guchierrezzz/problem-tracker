export const DashboardList = () => {
  return (
    <div className="flex flex-col gap-5 py-10">
      <div className="flex justify-between items-center">
        <h2 className="font-marlinge text-3xl uppercase tracking-widest">
          Lista de Dashboards
        </h2>
        <button className="tracking-widest uppercase btn btn-primary">
          Adicionar
        </button>
      </div>
      <div className="flex flex-col bg-base-100 border border-white/10">
        <div className="flex">
          <h3 className="font-bold text-lg border-b border-r border-white/10 w-1/3 px-4 py-2">
            Dashboard
          </h3>
          <h3 className="text-lg font-bold border-b border-white/10 w-2/3 px-4 py-2">
            Link
          </h3>
        </div>
        <div className="flex">
          <p className="px-4 py-2 border-r border-white/10 w-1/3">Title</p>
          <a className="px-4 py-2 link link-primary border-white/10 w-2/3">
            google.com
          </a>
        </div>
      </div>
    </div>
  );
};

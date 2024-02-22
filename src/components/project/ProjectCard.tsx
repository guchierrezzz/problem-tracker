export const ProjectCard = () => {
  return (
    <div className="shadow-xl card bg-base-100">
      <figure>
        <img
          src="https://www.onboardmeetings.com/wp-content/uploads/2022/04/The-Basics-of-Corporate-Structure-2-1200x675.jpeg"
          alt="Project Image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Título do projeto</h2>
        <p>
          Esta é a descrição do projeto, aqui podemos escrever detalhes sobre o
          mesmo.
        </p>
        <div className="justify-end card-actions">
          <button className="tracking-widest uppercase btn btn-primary">
            Acessar
          </button>
        </div>
      </div>
    </div>
  );
};

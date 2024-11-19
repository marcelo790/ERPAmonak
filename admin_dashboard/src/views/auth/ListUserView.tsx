import { Link } from "react-router-dom";


export default function ListUserView() {
  return (
    <>
        <h1 className="text-5xl font-black">Mis Usuarios</h1>
        <nav className="my-8">
            <Link className="bg-zinc-700 hover:bg-zinc-950 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
            to='/users/create'
        >
        Nuevo Usuario
        </Link>
        </nav>
    </>
  )
}

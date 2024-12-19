import { User } from "@/types/indexSecurity";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type ProfileProps = {
  name: User['name']
  email: User['email']
}

export default function Profile({name, email} : ProfileProps) {

    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    // Función para alternar la visibilidad del menú
    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
  
    const logout = () => {
      try {
        localStorage.removeItem('AUTH_TOKEN')
        queryClient.invalidateQueries({queryKey: ['user']})
        navigate('/auth/login')
      } catch (error) {
        console.log(error)
      }
    }
  
    return (
      <div className="profile relative ml-5">
        {/* Botón Avatar */}
        <div className="flex space-x-2 justify-center items-center">
            <img
            id="avatarButton"
            onClick={toggleDropdown}
            className="w-10 h-10 rounded-full flex overflow-hidden"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User dropdown"
            />
        </div>
  
        {/* Menú Dropdown */}
        {isDropdownOpen && (
          <div
            id="userDropdown"
            className="userDropdown absolute z-10 mt-2 divide-y shadow"
          >
            <div className="px-4 py-3  text-center">
              <div>{name}</div>
              <div className="font-medium truncate">{email}</div>
            </div>
            <ul className="py-2">
              <li>
               <Link to='/profile' className="block px-4 py-2 ">
                  Mi PERFIL
               </Link>
              </li>
            </ul>
            <div className="py-1">
              <button className="block px-4 py-2 "
              type="button"
              onClick={logout}
              >
                CERRAR SESION
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
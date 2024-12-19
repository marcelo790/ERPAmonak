import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllModulesWithPermission } from "@/api/ModuleAPI";

export default function RolWithModulePermissionList() {
  const { data, isLoading } = useQuery({
    queryKey: ["module_permission"],
    queryFn: getAllModulesWithPermission,
  });

  const [selectedItems, setSelectedItems] = useState<Record<
    number,
    { isOpen: boolean; permissions: Record<number, boolean> }
  >>({});

  useEffect(() => {
    if (data) {
      const initialState = data.reduce((acc: any, module: any) => {
        acc[module.id] = {
          isOpen: false,
          permissions: module.permissions.reduce((permAcc: any, perm: any) => {
            permAcc[perm.id] = false;
            return permAcc;
          }, {}),
        };
        return acc;
      }, {});
      setSelectedItems(initialState);
    }
  }, [data]);

  const handleModuleToggle = (moduleId: number) => {
    setSelectedItems((prevState) => ({
      ...prevState,
      [moduleId]: {
        ...prevState[moduleId],
        isOpen: !prevState[moduleId]?.isOpen,
      },
    }));
  };

  const handlePermissionChange = (moduleId: number, permissionId: number, checked: boolean) => {
    setSelectedItems((prevState) => ({
      ...prevState,
      [moduleId]: {
        ...prevState[moduleId],
        permissions: {
          ...prevState[moduleId]?.permissions,
          [permissionId]: checked,
        },
      },
    }));
  };

  const handleModuleChange = (moduleId: number, permissions: { id: number }[], checked: boolean) => {
    setSelectedItems((prevState) => ({
      ...prevState,
      [moduleId]: {
        isOpen: prevState[moduleId]?.isOpen || false,
        permissions: permissions.reduce(
          (acc, permission) => ({
            ...acc,
            [permission.id]: checked,
          }),
          {}
        ),
      },
    }));
  };

  if (isLoading) return <p>Cargando...</p>;

  if (data)
    return (
      <nav className="w-auto h-60 border-gray-200 border-2 p-5 shadow-md overflow-y-auto">
        <div>
          {data?.map((module: { id: number; name: string; permissions: { id: number; name: string }[] }) => (
            <div
              key={module.id}
              className={`mb-4 p-2 ${
                module.permissions.length === 0
                  ? " text-gray-400 cursor-not-allowed"
                  : ""
              }`}
            >
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-black"
                  checked={
                    module.permissions.length > 0 &&
                    module.permissions.every(
                      (permission) =>
                        selectedItems[module.id]?.permissions?.[permission.id] || false
                    )
                  }
                  onChange={(e) =>
                    handleModuleChange(module.id, module.permissions, e.target.checked)
                  }
                  disabled={module.permissions.length === 0} // Deshabilitar el checkbox
                />
                <span>{module.name}</span>
                <span
                  className={`cursor-pointer ${
                    module.permissions.length === 0 ? "cursor-not-allowed" : ""
                  }`}
                  onClick={() => {
                    if (module.permissions.length > 0) {
                      handleModuleToggle(module.id);
                    }
                  }}
                >
                  {selectedItems[module.id]?.isOpen ? "▼" : "▶"}
                </span>
              </div>
              {selectedItems[module.id]?.isOpen && module.permissions.length > 0 && (
                <div className="ml-4 mt-2 space-y-2">
                  {module.permissions.map((permission) => (
                    <label key={permission.id} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-black"
                        checked={
                          !!selectedItems[module.id]?.permissions?.[permission.id] || false
                        }
                        onChange={(e) =>
                          handlePermissionChange(
                            module.id,
                            permission.id,
                            e.target.checked
                          )
                        }
                      />
                      <span className="text-black">{permission.name}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    );
}

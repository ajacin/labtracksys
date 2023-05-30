import React from "react";
import PageLayout from "../../components/router-layouts/PageLayout";
import { Link } from "react-router-dom";
import { FaUserAlt, FaUserPlus } from "react-icons/fa";

const SuperUserPanel = () => {
  return (
    <>
      <PageLayout>
        <div className="grid grid-cols-3 md:grid-cols-8 gap-2 p-2 m-2">
          <div class="bg-light border hover:bg-primary border-dark rounded-md shadow-dark shadow-md h-16 p-1 flex items-center justify-center gap-2 cursor-pointer">
            <FaUserAlt />
            <Link to="/users" className="font-bold">
              Users
            </Link>
          </div>
          <div class="bg-light border hover:bg-primary border-dark rounded-md shadow-dark shadow-md h-16 p-1 flex items-center justify-center gap-2 col-span-2 md:col-span-1 cursor-pointer">
            <FaUserPlus />
            <Link to="/users/create" className="font-bold">
              Create User
            </Link>
          </div>
          <div class="bg-light border hover:bg-primary border-dark rounded-md shadow-dark shadow-md h-16 p-1 flex items-center justify-center gap-2">
            03
          </div>
          <div class="bg-light border hover:bg-primary border-dark rounded-md shadow-dark shadow-md h-16 p-1 flex items-center justify-center gap-2">
            04
          </div>
          <div class="bg-light border hover:bg-primary border-dark rounded-md shadow-dark shadow-md h-16 p-1 flex items-center justify-center gap-2">
            05
          </div>
          <div class="bg-light border hover:bg-primary border-dark rounded-md shadow-dark shadow-md h-16 p-1 flex items-center justify-center gap-2">
            06
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default SuperUserPanel;

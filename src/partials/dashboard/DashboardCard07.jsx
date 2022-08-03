import React from 'react';
import User1 from "../../images/user-36-01.jpg";
import User2 from "../../images/user-36-02.jpg";
import User6 from "../../images/user-36-06.jpg";
import User4 from "../../images/user-36-04.jpg";
import User5 from "../../images/user-36-05.jpg";


function DashboardCard07() {
  return (
    <div className="col-span-right xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Team Members performance</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Person</div>
                </th>
                
                <th className="p-2">
                  <div className="font-semibold text-center">Rating</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    
                    <img width="30" height="30" src = {User1}/>
                    <div className="p-2 text-slate-800">Angela Yu</div>
                  </div>
                </td>
                
                <td className="p-2">
                  <div className="text-center text-sky-500">9.8</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    
                    <img src = {User2} width = "30" height="30"/>
                    <div className="p-2 text-slate-800">Rick</div>
                  </div>
                </td>
                
                <td className="p-2">
                  <div className="text-center text-sky-500">8.6</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    

                    <img src = { User4 } width="30" height="30" />
                    <div className="p-2 text-slate-800">Sean</div>
                  </div>
                </td>
                
                <td className="p-2">
                  <div className="text-center text-sky-500">9.6</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    
                    <img src = { User5 } width="30" height="30" />
                    <div className="p-2 text-slate-800">Aarti</div>
                  </div>
                </td>
                
                <td className="p-2">
                  <div className="text-center text-sky-500">7.5</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    

                    <img src = { User6 } width="30" height="30" />
                    <div className="p-2 text-slate-800">Mbuemo</div>
                  </div>
                </td>
                
                <td className="p-2">
                  <div className="text-center text-sky-500">8.2</div>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;

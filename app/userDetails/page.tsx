// UserDetails.tsx
'use client'

import React, { useState, useEffect, ChangeEvent } from 'react';
import useGetUsers from '../hooks/useGetUsers';
import SearchBar from '../atom/Searchbar';
import Layout from '../component/Layout';
import { FaBell, FaUserAlt } from 'react-icons/fa';

type User = {
  id: string;
  username: string;
  email: string;
  num_hives: number;

};

const UserDetails: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [filteredData, setFilteredData] = useState<User[]>([]);
  const { users, loading } = useGetUsers();
  const itemsPerPage = 7;

  useEffect(() => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      // const [users] = useState<User[]>([]);
      const filtered = users.filter(
        (item) => item.username.toLowerCase().includes(query)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(users);
    }
  }, [searchQuery, users]);

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = filteredData.slice(startIndex, endIndex);

  const handleSearchSubmit = () => {

  };

  return (
    <Layout>
      <section className='mt-4 font-["Poppins"] h-auto w-screen px-96 pr-4'>
        <div className='icons fixed top-4 right-10 flex'>
          <FaUserAlt className='text-custom-color text-2xl mx-2' />
          <FaBell className='text-custom-color text-2xl mx-2' />
        </div>

        <p className='-ml-1 text-custom-orange font-bold mb-10'>Users</p>
        <SearchBar
          searchQuery={searchQuery}
          handleSearchChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchQuery(e.target.value)
          }
          placeholder='Type...'
          handleSearchSubmit={handleSearchSubmit}
        />
        <p className='-ml-1 text-custom-orange font-bold mt-8'>ALL USERS(200)</p>
        <div className="mt-16">
          <div className="max-h-500px overflow-y-auto scrollbar-thin">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="w-1/6 text-left">User Name</th>
                  <th className="w-1/6 text-left">ID</th>
                  <th className="w-1/6 text-left">Email</th>
                  <th className="w-1/6 text-left">Number of Hives</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={4}>Loading...</td>
                  </tr>
                ) : displayedData.length ? (
                  displayedData.map((item, index) => (
                    <React.Fragment key={item.username}>
                      <tr>
                        <td className="text-left p-4">
                          <span className="focus:outline-none">{item.username}</span>
                        </td>
                        <td className="text-left p-4">
                          <span className="focus:outline-none">{item.id}</span>
                        </td>
                        <td className="text-left p-4">
                          <span className="focus:outline-none">{item.email}</span>
                        </td>
                        <td className="text-left p-4">
                          <span className="focus:outline-none">{item.num_hives}</span>
                        </td>
                        <td className="text-left p-4"></td>
                      </tr>
                      <tr>
                        <td
                          colSpan={4}
                          className="border-b-2 border-custom-brown h-3 bg-transparent p-4"
                        ></td>
                      </tr>
                    </React.Fragment>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4}>No matching data available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <nav>
            <ul className="pagination flex flex-row list-none p-0">
              <li
                className={`page-item ${currentPage === 0 ? 'disabled' : ''}`}
                style={{ marginRight: '10px' }}
              >
                <button
                  className="page-link focus:outline-none bg-custom-orange text-white px-2 py-1 rounded"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 0}
                >
                  &lt;
                </button>
              </li>
              <li
                className={`page-item ${currentPage === pageCount - 1 ? 'disabled' : ''
                  }`}
                style={{ marginRight: '10px' }}
              >
                <button
                  className="page-link focus:outline-none bg-custom-orange text-white px-2 py-1 rounded"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === pageCount - 1}
                >
                  &gt;
                </button>
              </li>
            </ul>
          </nav>
        </div>

      </section>
    </Layout>
  );
};

export default UserDetails;

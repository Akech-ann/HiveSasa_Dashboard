// Devices.tsx
'use client'
import React, { useState, ChangeEvent, useEffect } from 'react';
import useGetDeviceList from '../hooks/useGetDeviceList';
import SearchBar from '../atom/Searchbar';
import Layout from '../component/Layout';
import { FaBell, FaUserAlt } from 'react-icons/fa';

type Device = {
  id: number;
  serial_number: string;
  date_of_installation: string;
  beehive: number;
};

const Devices: React.FC = () => {
  const { devices: temp, loading, error } = useGetDeviceList();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredData, setFilteredData] = useState<Device[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filtered = temp?.filter((item) => {
      const serial_number = item.serial_number ? item.serial_number.toLowerCase() : '';
      const date_of_installation = item.date_of_installation
        ? item.date_of_installation.toLowerCase()
        : '';
      return serial_number.includes(query) || date_of_installation.includes(query);
    }) || [];
    setFilteredData(filtered);
  }, [searchQuery, temp]);

  const columns = [
    { header: 'ID', key: 'id' },
    { header: 'Serial Number', key: 'serial_number' },
    { header: 'Installation Date', key: 'date_of_installation' },
    { header: 'Beehive', key: 'beehive' },
  ];

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 0 && newPage < totalPages) {
      setCurrentPage(newPage);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = filteredData.slice(startIndex, endIndex);

  return (
    <Layout>
    <section className='mt-4 font-["Poppins"] h-auto w-screen px-96 pr-40'>
    <div className='icons fixed top-4 right-10 flex'>
        <FaUserAlt className='text-custom-color text-2xl mx-2' />
        <FaBell className='text-custom-color text-2xl mx-2' />
      </div>

      <p className="-ml-1 text-custom-orange font-bold mb-10">Devices</p>
      <SearchBar
        searchQuery={searchQuery}
        handleSearchChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        handleSearchSubmit={() => {
          throw new Error('Function not implemented.');
        }}
      />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="mt-16 ">
          <table className="table-auto" style={{ width: '100%' }}>
            <thead>
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    style={{
                      textAlign: 'left', 
                    }}
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {displayedData.map((device, index) => (
                <React.Fragment key={device.id}>
                  <tr>
                    {columns.map((column) => (
                      <td
                        key={column.key}
                        style={{
                          padding: '15px', 
                          textAlign: 'left', 
                        }}
                      >
                        {device[column.key as keyof Device] }
                      </td>
                    ))}
                  </tr>
               
                  {index !== displayedData.length - 1 && (
                    <tr>
                      <td
                        colSpan={columns.length}
                        style={{
                          borderBottom: '2px solid #8B4513', 
                          height: '3px',
                          background: 'transparent',
                          padding: '10px 0', 
                        }}
                      ></td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="mt-4 flex justify-center"> 
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 0}
          className="mr-4 bg-custom-orange text-white px-2 py-1 rounded focus:outline-none"
        >
          &lt; {/* Left arrow */}
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
          className="bg-custom-orange text-white px-2 py-1 rounded focus:outline-none"
        >
          &gt; {/* Right arrow */}
        </button>
      </div>
    </section>
    </Layout>
  );
};

export default Devices;

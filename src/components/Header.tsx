import React, { useState } from 'react';
import { Bell, Search, User } from 'lucide-react';
import { useSearch } from '../hooks/useSearch';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const { searchResults, query, setQuery } = useSearch();
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    setShowResults(newQuery.length > 0);
  };

  const handleResultClick = (type: 'vendor' | 'task', id: string) => {
    setShowResults(false);
    setQuery('');
    navigate(type === 'vendor' ? `/vendors/${id}` : `/tasks/${id}`);
  };

  return (
    <header className="bg-white border-b border-gray-200 h-16">
      <div className="h-full px-4 flex items-center justify-between">
        <div className="flex items-center flex-1">
          <div className="relative w-96">
            <input
              type="text"
              value={query}
              onChange={handleSearch}
              placeholder="Search vendors, tasks, documents..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />

            {showResults && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-50">
                {searchResults.vendors.length === 0 && searchResults.tasks.length === 0 ? (
                  <div className="p-4 text-gray-500">No results found</div>
                ) : (
                  <>
                    {searchResults.vendors.length > 0 && (
                      <div className="p-2">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase px-2 mb-1">
                          Vendors
                        </h3>
                        {searchResults.vendors.map(vendor => (
                          <button
                            key={vendor.id}
                            onClick={() => handleResultClick('vendor', vendor.id)}
                            className="w-full text-left px-2 py-1.5 hover:bg-gray-50 rounded"
                          >
                            <div className="font-medium">{vendor.name}</div>
                            <div className="text-sm text-gray-500">{vendor.category}</div>
                          </button>
                        ))}
                      </div>
                    )}
                    {searchResults.tasks.length > 0 && (
                      <div className="p-2 border-t">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase px-2 mb-1">
                          Tasks
                        </h3>
                        {searchResults.tasks.map(task => (
                          <button
                            key={task.id}
                            onClick={() => handleResultClick('task', task.id)}
                            className="w-full text-left px-2 py-1.5 hover:bg-gray-50 rounded"
                          >
                            <div className="font-medium">{task.title}</div>
                            <div className="text-sm text-gray-500 truncate">
                              {task.description}
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="relative p-2 rounded-full hover:bg-gray-100">
            <Bell className="h-6 w-6 text-gray-600" />
            <span className="absolute top-1 right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              3
            </span>
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
            <span className="text-sm font-medium">John Doe</span>
          </div>
        </div>
      </div>
    </header>
  );
}
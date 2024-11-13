import { useState, useCallback, useMemo } from 'react';
import { useVendors } from './useVendors';
import { useTasks } from './useTasks';

export function useSearch() {
  const [query, setQuery] = useState('');
  const { vendors } = useVendors();
  const { tasks } = useTasks();

  const searchResults = useMemo(() => {
    const lowercaseQuery = query.toLowerCase();

    const filteredVendors = vendors.filter(vendor => 
      vendor.name.toLowerCase().includes(lowercaseQuery) ||
      vendor.email.toLowerCase().includes(lowercaseQuery) ||
      vendor.category.toLowerCase().includes(lowercaseQuery)
    );

    const filteredTasks = tasks.filter(task =>
      task.title.toLowerCase().includes(lowercaseQuery) ||
      task.description.toLowerCase().includes(lowercaseQuery)
    );

    return { vendors: filteredVendors, tasks: filteredTasks };
  }, [query, vendors, tasks]);

  return { searchResults, query, setQuery };
}
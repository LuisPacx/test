import React, { useState } from 'react';
import UserCard from '../components/UserCard';
import { useUsers } from '../hooks/useUsers';

const UsersPage: React.FC = () => {
  const [filter, setFilter] = useState('');
  const [layout, setLayout] = useState<'compact' | 'full'>('compact');
  const { users, loading } = useUsers(filter);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <button
          onClick={() => setLayout(layout === 'compact' ? 'full' : 'compact')}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Layout: {layout}
        </button>
        <input
          type="text"
          placeholder="Filter by name..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 border rounded flex-1"
        />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {users.map((u) => (
            <UserCard
              key={u.id}
              name={u.name}
              role={u.username}
              status="active"
              avatarUrl={`https://i.pravatar.cc/150?u=${u.id}`}
              layout={layout}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersPage;
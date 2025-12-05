import React from 'react';

interface UserCardProps {
  name: string;
  role: string;
  status: 'active' | 'inactive';
  avatarUrl: string;
  layout: 'compact' | 'full';
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  role,
  status,
  avatarUrl,
  layout,
}) => {
  const isCompact = layout === 'compact';

  return (
    <div
      className={`flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border ${isCompact ? 'flex-col sm:flex-row w-full sm:w-80' : 'flex-col w-64'
        }`}
    >
      <img
        src={avatarUrl}
        alt={name}
        className={`rounded-full ${isCompact ? 'w-16 h-16' : 'w-24 h-24'}`}
      />
      <div className={isCompact ? 'text-center sm:text-left' : 'text-center'}>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-600">@{role}</p>
        {!isCompact && <p className="text-sm text-gray-500 mt-2">{status}</p>}
      </div>
    </div>
  );
};

export default UserCard;
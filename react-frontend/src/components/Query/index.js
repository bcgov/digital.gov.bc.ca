import React from 'react';
import { useQuery } from '@apollo/react-hooks';

const Query = ({ children, query, id, uid, category, isClass }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { id: id, uid: uid, category: category, isClass: isClass },
  });
  if (loading) return <p>Loading...</p>;
  if (error) {
    if (error?.graphQLErrors[0]?.message === 'Forbidden') {
      return (
        <p>
          Error: The field "{query?.definitions[0]?.name?.value}" hasn't been
          made public. If you think this is a mistake please contact the site
          admin.
        </p>
      );
    }
    return <p>Error: {JSON.stringify(error)}</p>;
  }
  return children({ data });
};

export default Query;

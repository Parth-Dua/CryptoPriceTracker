import React from 'react';
import { useHistory } from '@docusaurus/router';

export default function Home() {
  const history = useHistory();

  React.useEffect(() => {
    // This line forces a redirect from "/" to "/docs/project-setup"
    history.push('/docs/project-setup');
  }, [history]);

  return null;
}

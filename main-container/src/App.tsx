import React, { Suspense, useState } from 'react';
import ErrorBoundary from './Components/error-boundry/ErrorBoundry';
import { ErrorComponent } from './Components/error-boundry/ErrorComponent';

import "./App.css";
import WIPPage from '@/Pages/WIPPage/WIPPage';

const TodoApp = React.lazy(() => import('Todo/TodoApp'));

function App() {
  const [pageShowing, setPageShowing] = useState<String>("TO_DO");

  return (
    <Suspense fallback={<h1>Loading application...</h1>}>
      <div className='nav-container'>
        <p className='nav-item' onClick={() => setPageShowing("TO_DO")}>To Do List</p>
        <p className='nav-item' onClick={() => setPageShowing("SECONDARY")}>Secoundary Page</p>
      </div>
      <div>
        {pageShowing === "TO_DO" &&
          <ErrorBoundary fallback={<ErrorComponent />}>
            <Suspense fallback={<h1>Loading to do list...</h1>}>
              <TodoApp />
            </Suspense>
          </ErrorBoundary>
        }
        {pageShowing === "SECONDARY" &&
          <WIPPage />
        }
      </div>
    </Suspense>
  );
}

export default App;

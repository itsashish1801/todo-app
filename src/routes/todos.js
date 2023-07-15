import { useEffect, useState } from 'react';
import { ButtonSolid } from '../components/Button';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='container mx-auto max-w-2xl px-5 pt-6'>
      <h1 className='text-3xl font-medium font-display text-center'>
        Todo List
      </h1>

      <div className='mt-6 max-w-xl mx-auto flex gap-5'>
        <div className='flex-1'>
          <label htmlFor='todo' className='sr-only'>
            New Todo title
          </label>
          <input
            type='text'
            name='todo'
            id='todo'
            value={inputValue}
            onChange={handleInputChange}
            className='shadow-sm focus:ring-violet-500 focus:border-violet-500 block w-full sm:text-sm border-gray-300 rounded-md'
            placeholder='Your new Todo title here'
          />
        </div>

        <ButtonSolid onClickHandler={() => setTodos([...todos, inputValue])}>
          Add a new Todo
        </ButtonSolid>
      </div>

      <div className='mt-12'>
        <div className='px-4 sm:px-6 lg:px-8'>
          <div className='sm:flex sm:items-center'>
            <div className='sm:flex-auto'>
              <h1 className='text-xl font-semibold text-gray-900'>Your Todo</h1>
              <p className='mt-1 text-sm text-gray-700'>
                Todo that you'll add will be visible here.
              </p>
            </div>
          </div>
          <div className='mt-6 flex flex-col'>
            <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
                  <table className='min-w-full divide-y divide-gray-300'>
                    <thead className='bg-gray-50'>
                      <tr className='divide-x divide-gray-200'>
                        <th
                          scope='col'
                          className='py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                        >
                          Todo
                        </th>
                        <th
                          scope='col'
                          className='px-4 py-3.5 text-left text-sm font-semibold text-gray-900'
                        ></th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200 bg-white'>
                      {todos.map(({ text, _id: id }) => (
                        <tr key={text} className='divide-x divide-gray-200'>
                          <td className='whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6 w-full'>
                            {text}
                          </td>
                          <td className='whitespace p-4 text-sm text-gray-500'>
                            <button
                              type='button'
                              className='inline-flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto'
                            >
                              Edit
                            </button>
                          </td>
                          <td className='whitespace p-4 text-sm text-gray-500'>
                            <button
                              onClick={() => {}}
                              type='button'
                              className='inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto'
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;

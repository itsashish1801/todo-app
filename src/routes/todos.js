import { ButtonSolid } from '../components/Button';
import useTodoStore from '../stores/useTodoStore';

const Todos = () => {
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const text = e.target.elements.todoText.value;
    if (text.trim() !== '') {
      addTodo(text);
      e.target.elements.todoText.value = '';
    }
  };

  return (
    <div className='container mx-auto max-w-2xl px-5 pt-6'>
      <h1 className='text-3xl font-medium font-display text-center'>
        Todo List
      </h1>

      <form
        className='mt-6 max-w-xl mx-auto flex gap-5'
        onSubmit={handleAddTodo}
      >
        <div className='flex-1'>
          <label htmlFor='todo' className='sr-only'>
            New Todo title
          </label>
          <input
            type='text'
            name='todoText'
            id='todoText'
            className='shadow-sm focus:ring-violet-500 focus:border-violet-500 block w-full sm:text-sm border-slate-300 rounded-md'
            placeholder='Your new Todo title here'
          />
        </div>

        <ButtonSolid type='submit'>Add a new Todo</ButtonSolid>
      </form>

      <div className='mt-12'>
        <div className='px-4 sm:px-6 lg:px-8'>
          <div className='sm:flex sm:items-center sm:gap-6'>
            <div className='sm:flex-auto w-full'>
              <h1 className='text-xl font-semibold text-slate-900'>
                Your Todo
              </h1>
              <p className='mt-1 text-sm text-slate-700'>
                Todo that you'll add will be visible here.
              </p>
            </div>

            <div className='w-full max-w-[12.5rem]'>
              <label
                htmlFor='location'
                className='block text-sm font-medium text-gray-700'
              >
                Show Todos
              </label>
              <select
                id='location'
                name='location'
                className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm rounded-md'
              >
                <option selected>All</option>
                <option>Completed</option>
                <option>Incomplete</option>
              </select>
            </div>
          </div>
          <div className='mt-6 flex flex-col'>
            <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
                  <table className='min-w-full divide-y divide-slate-300'>
                    <thead className='bg-slate-50'>
                      <tr className='divide-x divide-slate-200'>
                        <th
                          scope='col'
                          className='py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-slate-900 sm:pl-6'
                        >
                          Todo
                        </th>
                        <th
                          scope='col'
                          className='px-4 py-3.5 text-left text-sm font-semibold text-slate-900'
                        ></th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-slate-200 bg-white'>
                      {todos.map(({ text, completed }, index) => (
                        <tr key={text} className='divide-x divide-slate-200'>
                          <td className='whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-slate-900 sm:pl-6 w-full'>
                            <div className='flex items-center'>
                              <div>
                                <input
                                  id='todo'
                                  name='todo'
                                  type='checkbox'
                                  className='focus:ring-violet-500 h-4 w-4 text-violet-600 border-slate-300 rounded'
                                />
                              </div>
                              <div className='text-sm ml-3 mt-0.5'>
                                <label
                                  htmlFor='todo'
                                  className='font-medium text-gray-700 select-none'
                                >
                                  {text}
                                </label>
                              </div>
                            </div>
                          </td>
                          <td className='whitespace p-4 text-slate-500'>
                            <button
                              onClick={() => {
                                removeTodo(index);
                              }}
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

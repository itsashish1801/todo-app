import { ButtonSolid } from '../components/Button';

const Contact = () => {
  return (
    <div className='container mx-auto max-w-3xl px-5 pt-6'>
      <h1 className='text-3xl font-medium font-display text-center'>
        Contact Us
      </h1>

      <form className='mt-10 mx-auto flex flex-col gap-6'>
        <div className='flex flex-col sm:flex-row gap-6'>
          <div className='w-full'>
            <label
              htmlFor='firstname'
              className='block text-sm font-medium text-slate-700'
            >
              First Name
            </label>
            <div className='mt-1'>
              <input
                type='text'
                name='firstname'
                id='firstname'
                className='shadow-sm focus:ring-violet-500 focus:border-violet-500 block w-full text-sm border-slate-300 rounded-md'
                placeholder='Steve'
                required
                minLength={2}
                maxLength={60}
              />
            </div>
          </div>

          <div className='w-full'>
            <label
              htmlFor='lastname'
              className='block text-sm font-medium text-slate-700'
            >
              Last Name
            </label>
            <div className='mt-1'>
              <input
                type='text'
                name='lastname'
                id='lastname'
                className='shadow-sm focus:ring-violet-500 focus:border-violet-500 block w-full text-sm border-slate-300 rounded-md'
                placeholder='Gates'
                required
                minLength={2}
                maxLength={60}
              />
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-slate-700'
          >
            Email
          </label>
          <div className='mt-1'>
            <input
              type='email'
              name='email'
              id='email'
              className='shadow-sm focus:ring-violet-500 focus:border-violet-500 block w-full text-sm border-slate-300 rounded-md'
              placeholder='stevegates@tesla.com'
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor='comments'
            className='block text-sm font-medium text-slate-700'
          >
            Comments
          </label>
          <div className='mt-1'>
            <textarea
              name='comments'
              id='comments'
              className='shadow-sm focus:ring-violet-500 focus:border-violet-500 block w-full text-sm border-slate-300 rounded-md resize-none'
              rows={5}
              placeholder='The quick brown fox jumps over the lazy dog.'
            />
          </div>
        </div>

        <div className='mt-6 text-right'>
          <ButtonSolid>Save changes</ButtonSolid>
        </div>
      </form>
    </div>
  );
};

export default Contact;

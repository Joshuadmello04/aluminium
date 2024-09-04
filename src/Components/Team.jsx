import { motion} from "framer-motion";

const Team = () => {
  return (
    <div>
    <section className="mx-auto py-8 px-4 max-w-screen-xl text-center lg:py-16 lg:px-6">
    <div className="mb-8 max-w-screen-sm mx-auto lg:mb-16">
      <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">Our Team</h2>
      <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
        Explore our talented team who are the driving force behind our success.
      </p>
    </div> 
  
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
      {/*<!-- Team Member Card -->
         <div className="text-center text-gray-500 dark:text-gray-400">
        <img className="mx-auto mb-4 w-36 h-36 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
          <a href="#">Rishabh Pathuck</a>
        </h3>
        <p className="mb-4">CEO/Co-founder</p>
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="#" aria-label="Bonnie Green on LinkedIn" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Bonnie Green on Twitter" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Bonnie Green on Facebook" className="text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Bonnie Green on Instagram" className="text-[#ea4c89] hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.206-.326 3.525-4.048 6.951-5.46 1.28 2.557 2.66 5.229 3.261 6.378-1.76 1.215-3.892 1.82-5.973 1.82zm8.522-1.52a8.51 8.51 0 01-2.326-1.82c-1.01-1.48-2.5-4.353-3.987-6.757a16.308 16.308 0 004.497-1.478c2.547-1.335 3.562-3.258 3.748-3.41.083.494.14.993.14 1.499v.065a8.493 8.493 0 01-1.228 4.35zM18.033 4.67a8.578 8.578 0 011.932 5.488c-.248-.059-3.113-1.584-6.11-2.75-.106-.258-.21-.511-.332-.761a25.63 25.63 0 00-.782-1.38A8.509 8.509 0 0118.033 4.67z" clipRule="evenodd" /></svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="text-center text-gray-500 dark:text-gray-400">
        <img className="mx-auto mb-4 w-36 h-36 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
          <a href="#">Sahil Khan</a>
        </h3>
        <p className="mb-4">CEO/Co-founder</p>
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="#" aria-label="Bonnie Green on LinkedIn" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Bonnie Green on Twitter" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Bonnie Green on Facebook" className="text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Bonnie Green on Instagram" className="text-[#ea4c89] hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.206-.326 3.525-4.048 6.951-5.46 1.28 2.557 2.66 5.229 3.261 6.378-1.76 1.215-3.892 1.82-5.973 1.82zm8.522-1.52a8.51 8.51 0 01-2.326-1.82c-1.01-1.48-2.5-4.353-3.987-6.757a16.308 16.308 0 004.497-1.478c2.547-1.335 3.562-3.258 3.748-3.41.083.494.14.993.14 1.499v.065a8.493 8.493 0 01-1.228 4.35zM18.033 4.67a8.578 8.578 0 011.932 5.488c-.248-.059-3.113-1.584-6.11-2.75-.106-.258-.21-.511-.332-.761a25.63 25.63 0 00-.782-1.38A8.509 8.509 0 0118.033 4.67z" clipRule="evenodd" /></svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="text-center text-gray-500 dark:text-gray-400">
        <img className="mx-auto mb-4 w-36 h-36 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
          <a href="#">Akshat Sarraf</a>
        </h3>
        <p className="mb-4">CEO/Co-founder</p>
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="#" aria-label="Bonnie Green on LinkedIn" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Bonnie Green on Twitter" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Bonnie Green on Facebook" className="text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Bonnie Green on Instagram" className="text-[#ea4c89] hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.206-.326 3.525-4.048 6.951-5.46 1.28 2.557 2.66 5.229 3.261 6.378-1.76 1.215-3.892 1.82-5.973 1.82zm8.522-1.52a8.51 8.51 0 01-2.326-1.82c-1.01-1.48-2.5-4.353-3.987-6.757a16.308 16.308 0 004.497-1.478c2.547-1.335 3.562-3.258 3.748-3.41.083.494.14.993.14 1.499v.065a8.493 8.493 0 01-1.228 4.35zM18.033 4.67a8.578 8.578 0 011.932 5.488c-.248-.059-3.113-1.584-6.11-2.75-.106-.258-.21-.511-.332-.761a25.63 25.63 0 00-.782-1.38A8.509 8.509 0 0118.033 4.67z" clipRule="evenodd" /></svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="text-center text-gray-500 dark:text-gray-400">
        <img className="mx-auto mb-4 w-36 h-36 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
          <a href="#">Joshua Dmello</a>
        </h3>
        <p className="mb-4">CEO/Co-founder</p>
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="#" aria-label="Bonnie Green on LinkedIn" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Bonnie Green on Twitter" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Bonnie Green on Facebook" className="text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Bonnie Green on Instagram" className="text-[#ea4c89] hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.206-.326 3.525-4.048 6.951-5.46 1.28 2.557 2.66 5.229 3.261 6.378-1.76 1.215-3.892 1.82-5.973 1.82zm8.522-1.52a8.51 8.51 0 01-2.326-1.82c-1.01-1.48-2.5-4.353-3.987-6.757a16.308 16.308 0 004.497-1.478c2.547-1.335 3.562-3.258 3.748-3.41.083.494.14.993.14 1.499v.065a8.493 8.493 0 01-1.228 4.35zM18.033 4.67a8.578 8.578 0 011.932 5.488c-.248-.059-3.113-1.584-6.11-2.75-.106-.258-.21-.511-.332-.761a25.63 25.63 0 00-.782-1.38A8.509 8.509 0 0118.033 4.67z" clipRule="evenodd" /></svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="text-center text-gray-500 dark:text-gray-400">
        <img className="mx-auto mb-4 w-36 h-36 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
          <a href="#">Max Varghese</a>
        </h3>
        <p className="mb-4">CEO/Co-founder</p>
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="#" aria-label="Bonnie Green on LinkedIn" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Bonnie Green on Twitter" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Bonnie Green on Facebook" className="text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Bonnie Green on Instagram" className="text-[#ea4c89] hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.206-.326 3.525-4.048 6.951-5.46 1.28 2.557 2.66 5.229 3.261 6.378-1.76 1.215-3.892 1.82-5.973 1.82zm8.522-1.52a8.51 8.51 0 01-2.326-1.82c-1.01-1.48-2.5-4.353-3.987-6.757a16.308 16.308 0 004.497-1.478c2.547-1.335 3.562-3.258 3.748-3.41.083.494.14.993.14 1.499v.065a8.493 8.493 0 01-1.228 4.35zM18.033 4.67a8.578 8.578 0 011.932 5.488c-.248-.059-3.113-1.584-6.11-2.75-.106-.258-.21-.511-.332-.761a25.63 25.63 0 00-.782-1.38A8.509 8.509 0 0118.033 4.67z" clipRule="evenodd" /></svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="text-center text-gray-500 dark:text-gray-400">
        <img className="mx-auto mb-4 w-36 h-36 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
          <a href="#">Eden Charles</a>
        </h3>
        <p className="mb-4">CEO/Co-founder</p>
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="#" aria-label="Bonnie Green on LinkedIn" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Bonnie Green on Twitter" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Bonnie Green on Facebook" className="text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Bonnie Green on Instagram" className="text-[#ea4c89] hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.206-.326 3.525-4.048 6.951-5.46 1.28 2.557 2.66 5.229 3.261 6.378-1.76 1.215-3.892 1.82-5.973 1.82zm8.522-1.52a8.51 8.51 0 01-2.326-1.82c-1.01-1.48-2.5-4.353-3.987-6.757a16.308 16.308 0 004.497-1.478c2.547-1.335 3.562-3.258 3.748-3.41.083.494.14.993.14 1.499v.065a8.493 8.493 0 01-1.228 4.35zM18.033 4.67a8.578 8.578 0 011.932 5.488c-.248-.059-3.113-1.584-6.11-2.75-.106-.258-.21-.511-.332-.761a25.63 25.63 0 00-.782-1.38A8.509 8.509 0 0118.033 4.67z" clipRule="evenodd" /></svg>
            </a>
          </li>
        </ul>
      </div>
        */}
<motion.div
  className="text-center text-gray-500 dark:text-gray-400"
  whileInView={{ opacity: 1, y: 0 }}
  initial={{ opacity: 0, y: 10 }}
  transition={{ duration: 0.5 }} // Transition settings
  viewport={{ once: true }} // Ensure animation occurs only once
>
  <motion.img
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 10 }}
    transition={{ duration: 0.5 }}
    className="mx-auto mb-4 w-36 h-36 rounded-full object-cover"
    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
    alt="Bonnie Green"
  />
  <motion.h3
    className="text-2xl font-bold text-gray-900 dark:text-white mb-1"
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 10 }}
    transition={{ duration: 0.7 }}
  >
    <a href="#" style={{ color: 'white' }}>
      Rishabh Pathuck
    </a>
  </motion.h3>
  <motion.p
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 10 }}
    transition={{ duration: 0.5 }}
    className="mb-4"
  >
    CEO/Co-founder
  </motion.p>
  <motion.ul
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 10 }}
    transition={{ duration: 0.5 }}
    className="flex justify-center space-x-4"
  >
    <li>
      <a
        href="#"
        aria-label="Rishabh Pathuck on LinkedIn"
        className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </li>
    <li>
      <a
        href="#"
        aria-label="Rishabh Pathuck on Twitter"
        className="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      </a>
    </li>
    <li>
      <a
        href="#"
        aria-label="Rishabh Pathuck on Facebook"
        className="text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </li>
    <li>
      <a
        href="#"
        aria-label="Rishabh Pathuck on Instagram"
        className="text-[#ea4c89] hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.943c-2.746.742-5.235.73-5.59.73-.027-.15-.044-.302-.044-.458 0-1.971.747-3.766 1.967-5.096zM3.648 8.812c.182.01 2.92.086 5.821-.675.169.308.326.626.486.945a42.65 42.65 0 00.832 1.687c-2.802 1.109-5.73 1.142-6.015 1.145a8.495 8.495 0 01-1.124-3.103zm.482 5.744c.281.054 3.101.629 5.943.271.065.141.12.293.184.445.168.368.334.747.564 1.236-3.145 1.28-4.577 3.124-4.761 3.362a8.52 8.52 0 01-1.93-5.314zm8.262 6.432c-2.17 0-4.154-.813-5.662-2.148.152-.216 1.443-1.941 4.48-3.08 1.399 2.57 2.95 4.675 3.189 5a8.687 8.687 0 01-2.007.228zm3.633-.803a53.896 53.896 0 01-3.167-4.943c2.746-.742 5.235-.73 5.59-.73.027.15.044.302.044.458 0 1.971-.747 3.766-1.967 5.096zM20.353 15.19c-.182-.01-2.92-.086-5.821.675a47.019 47.019 0 00-.486-.945 42.65 42.65 0 00-.832-1.687c2.802-1.109 5.73-1.142 6.015-1.145a8.495 8.495 0 011.124 3.103zm-1.933-5.79c-.281-.054-3.101-.629-5.943-.271a25.125 25.125 0 00-.184-.445 42.872 42.872 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362a8.52 8.52 0 011.93 5.314zm-8.262-6.432c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5a8.687 8.687 0 012.007-.228zm-3.633.803a53.896 53.896 0 013.167 4.943c-2.746.742-5.235.73-5.59.73-.027-.15-.044-.302-.044-.458 0-1.971.747-3.766 1.967-5.096zm-.999 11.287a8.502 8.502 0 001.93 5.314c.184-.238 1.616-2.081 4.761-3.362a25.416 25.416 0 01-.564-1.236c-.065-.152-.119-.304-.184-.445-2.842.358-5.662-.217-5.943-.271z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </li>
  </motion.ul>
</motion.div>

      <motion.div
      className="text-center text-gray-500 dark:text-gray-400"
      whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5 }} // Transition settings
      viewport={{ once: true }} // Ensure animation occurs only once
    >
      <motion.img
      whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5 }}
        className="mx-auto mb-4 w-36 h-36 rounded-full object-cover"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
        alt="Bonnie Green"
      />
      <motion.h3 
      className="text-2xl font-bold text-gray-900 dark:text-white mb-1"
      whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.7 }}>
        <a href="#" style={{ color: 'white' }}>Akshat Sarraf</a>
      </motion.h3>
      <motion.p 
      whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5 }}
      className="mb-4">CEO/Co-founder</motion.p>
      <motion.ul
      whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5 }}
      className="flex justify-center space-x-4">
        <li>
          <a
            href="#"
            aria-label="Rishabh Pathuck on LinkedIn"
            className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-label="Rishabh Pathuck on Twitter"
            className="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-label="Rishabh Pathuck on Facebook"
            className="text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-label="Rishabh Pathuck on Instagram"
            className="text-[#ea4c89] hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.206-.326 3.525-4.048 6.951-5.46 1.28 2.557 2.66 5.229 3.261 6.378-1.76 1.215-3.892 1.82-5.973 1.82zm8.522-1.52a8.51 8.51 0 01-2.326-1.82c-1.01-1.48-2.5-4.353-3.987-6.757a16.308 16.308 0 004.497-1.478c2.547-1.335 3.562-3.258 3.748-3.41.083.494.14.993.14 1.499v.065a8.493 8.493 0 01-1.228 4.35zM18.033 4.67a8.578 8.578 0 011.932 5.488c-.248-.059-3.113-1.584-6.11-2.75-.106-.258-.21-.511-.332-.761a25.63 25.63 0 00-.782-1.38A8.509 8.509 0 0118.033 4.67z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
      </motion.ul>
    </motion.div>
    <motion.div
        className="text-center text-gray-500 dark:text-gray-400"
        whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }} // Transition settings
        viewport={{ once: true }} // Ensure animation occurs only once
      >
        <motion.img
        whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }}
          className="mx-auto mb-4 w-36 h-36 rounded-full object-cover"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
          alt="Bonnie Green"
        />
        <motion.h3 
        className="text-2xl font-bold text-gray-900 dark:text-white mb-1"
        whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.7 }}>
          <a href="#" style={{ color: 'white' }}>RSahil Khan</a>
        </motion.h3>
        <motion.p 
        whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }}
        className="mb-4">CEO/Co-founder</motion.p>
        <motion.ul
        whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }}
        className="flex justify-center space-x-4">
          <li>
            <a
              href="#"
              aria-label="Rishabh Pathuck on LinkedIn"
              className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Rishabh Pathuck on Twitter"
              className="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Rishabh Pathuck on Facebook"
              className="text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Rishabh Pathuck on Instagram"
              className="text-[#ea4c89] hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.206-.326 3.525-4.048 6.951-5.46 1.28 2.557 2.66 5.229 3.261 6.378-1.76 1.215-3.892 1.82-5.973 1.82zm8.522-1.52a8.51 8.51 0 01-2.326-1.82c-1.01-1.48-2.5-4.353-3.987-6.757a16.308 16.308 0 004.497-1.478c2.547-1.335 3.562-3.258 3.748-3.41.083.494.14.993.14 1.499v.065a8.493 8.493 0 01-1.228 4.35zM18.033 4.67a8.578 8.578 0 011.932 5.488c-.248-.059-3.113-1.584-6.11-2.75-.106-.258-.21-.511-.332-.761a25.63 25.63 0 00-.782-1.38A8.509 8.509 0 0118.033 4.67z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </motion.ul>
      </motion.div>
      <motion.div
        className="text-center text-gray-500 dark:text-gray-400"
        whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }} // Transition settings
        viewport={{ once: true }} // Ensure animation occurs only once
      >
        <motion.img
        whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }}
          className="mx-auto mb-4 w-36 h-36 rounded-full object-cover"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
          alt="Bonnie Green"
        />
        <motion.h3 
        className="text-2xl font-bold text-gray-900 dark:text-white mb-1"
        whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.7 }}>
          <a href="#" style={{ color: 'white' }}>Joshua Dmello</a>
        </motion.h3>
        <motion.p 
        whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }}
        className="mb-4">CEO/Co-founder</motion.p>
        <motion.ul
        whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }}
        className="flex justify-center space-x-4">
          <li>
            <a
              href="#"
              aria-label="Rishabh Pathuck on LinkedIn"
              className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Rishabh Pathuck on Twitter"
              className="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Rishabh Pathuck on Facebook"
              className="text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Rishabh Pathuck on Instagram"
              className="text-[#ea4c89] hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.206-.326 3.525-4.048 6.951-5.46 1.28 2.557 2.66 5.229 3.261 6.378-1.76 1.215-3.892 1.82-5.973 1.82zm8.522-1.52a8.51 8.51 0 01-2.326-1.82c-1.01-1.48-2.5-4.353-3.987-6.757a16.308 16.308 0 004.497-1.478c2.547-1.335 3.562-3.258 3.748-3.41.083.494.14.993.14 1.499v.065a8.493 8.493 0 01-1.228 4.35zM18.033 4.67a8.578 8.578 0 011.932 5.488c-.248-.059-3.113-1.584-6.11-2.75-.106-.258-.21-.511-.332-.761a25.63 25.63 0 00-.782-1.38A8.509 8.509 0 0118.033 4.67z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </motion.ul>
      </motion.div>
      <motion.div
        className="text-center text-gray-500 dark:text-gray-400"
        whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }} // Transition settings
        viewport={{ once: true }} // Ensure animation occurs only once
      >
        <motion.img
        whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }}
          className="mx-auto mb-4 w-36 h-36 rounded-full object-cover"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
          alt="Bonnie Green"
        />
        <motion.h3 
        className="text-2xl font-bold text-gray-900 dark:text-white mb-1"
        whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.7 }}>
          <a href="#" style={{ color: 'white' }}>Max Varghese</a>
        </motion.h3>
        <motion.p 
        whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }}
        className="mb-4">CEO/Co-founder</motion.p>
        <motion.ul
        whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }}
        className="flex justify-center space-x-4">
          <li>
            <a
              href="#"
              aria-label="Rishabh Pathuck on LinkedIn"
              className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Rishabh Pathuck on Twitter"
              className="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Rishabh Pathuck on Facebook"
              className="text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Rishabh Pathuck on Instagram"
              className="text-[#ea4c89] hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.206-.326 3.525-4.048 6.951-5.46 1.28 2.557 2.66 5.229 3.261 6.378-1.76 1.215-3.892 1.82-5.973 1.82zm8.522-1.52a8.51 8.51 0 01-2.326-1.82c-1.01-1.48-2.5-4.353-3.987-6.757a16.308 16.308 0 004.497-1.478c2.547-1.335 3.562-3.258 3.748-3.41.083.494.14.993.14 1.499v.065a8.493 8.493 0 01-1.228 4.35zM18.033 4.67a8.578 8.578 0 011.932 5.488c-.248-.059-3.113-1.584-6.11-2.75-.106-.258-.21-.511-.332-.761a25.63 25.63 0 00-.782-1.38A8.509 8.509 0 0118.033 4.67z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </motion.ul>
      </motion.div>
      <motion.div
        className="text-center text-gray-500 dark:text-gray-400"
        whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }} // Transition settings
        viewport={{ once: true }} // Ensure animation occurs only once
      >
        <motion.img
        whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }}
          className="mx-auto mb-4 w-36 h-36 rounded-full object-cover"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
          alt="Bonnie Green"
        />
        <motion.h3 
        className="text-2xl font-bold text-gray-900 dark:text-white mb-1"
        whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.7 }}>
          <a href="#" style={{ color: 'white' }}>Eden Charles</a>
        </motion.h3>
        <motion.p 
        whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }}
        className="mb-4">CEO/Co-founder</motion.p>
        <motion.ul
        whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }}
        className="flex justify-center space-x-4">
          <li>
            <a
              href="#"
              aria-label="Rishabh Pathuck on LinkedIn"
              className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Rishabh Pathuck on Twitter"
              className="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Rishabh Pathuck on Facebook"
              className="text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Rishabh Pathuck on Instagram"
              className="text-[#ea4c89] hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.206-.326 3.525-4.048 6.951-5.46 1.28 2.557 2.66 5.229 3.261 6.378-1.76 1.215-3.892 1.82-5.973 1.82zm8.522-1.52a8.51 8.51 0 01-2.326-1.82c-1.01-1.48-2.5-4.353-3.987-6.757a16.308 16.308 0 004.497-1.478c2.547-1.335 3.562-3.258 3.748-3.41.083.494.14.993.14 1.499v.065a8.493 8.493 0 01-1.228 4.35zM18.033 4.67a8.578 8.578 0 011.932 5.488c-.248-.059-3.113-1.584-6.11-2.75-.106-.258-.21-.511-.332-.761a25.63 25.63 0 00-.782-1.38A8.509 8.509 0 0118.033 4.67z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </motion.ul>
      </motion.div>
    
      {/*!-- Repeat for other team members -->*/}
    </div>
  </section>
  
    </div>
  )
}

export default Team

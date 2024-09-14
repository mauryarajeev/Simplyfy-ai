import React from 'react';
const App: React.FC = () => {
return (
    <div className='flex flex-col h-screen'>
        <header className='bg-grey-800'>
         {/* <Header/> */}
        </header>
        <div className='flex flex-1 flex-col'>
            <aside className='bg-grey-200 w-full'>
            {/* <SideBar/> */}
            </aside>

            <main className='flex-1'>

            </main>

        </div>
   <footer className='bg-grey-800'>
{/* <Footer/> */}
   </footer>
    </div>
)
}

export default App;

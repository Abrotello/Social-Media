const Header = () => {
  return (
    <header className="sm:flex sm:content-center sm:place-content-between">
        <div className="border-b border-DarkTheme-DesaturatedBlueText py-8">
            <h1 className="text-LightTheme-WhiteBG text-2xl font-bold">Social Media Dashboard</h1>
            <p className="text-[14px] text-DarkTheme-DesaturatedBlueText font-bold">Total Followers: 23,004</p>
        </div>

        <div className="py-6 flex place-content-between sm:items-center gap-5">
            <p className="text-[14px] text-DarkTheme-DesaturatedBlueText font-bold sm:text-DarkTheme-WhiteText">Dark Mode</p>
            
             <button className="text-DarkTheme-DesaturatedBlueText">On</button>
        </div>
    </header>
  )
}

export default Header
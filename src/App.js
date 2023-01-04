import logo from './logo.svg';
import './App.css';

function App() {
  
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop <= windowHeight ) {
        reveals[i].classList.add("active");
      }
      else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  return (
    <>
    <nav>
      <div className="logo">
        BetterSwap
      </div>
      <a href="https://app.betterswap.fi/" targer="_blank"><div className="btn-launch " style={{margin:"2%",padding:"8%",textAlign:"center",lineHeight:"20px",width:"max-content", selfAlign:"flex-end"}}>Launch App</div></a>
    </nav>
    <div className="trade-content" style={{height:"75vh",padding:"10% 5%",fontSize:"3em"}}> <span className="highlight">WELCOME TO THE BEST THING IN DeFi, SINCE DeFi.</span>
        <p className="sub-heading">SCROLL TO FIND OUT MORE</p>
    </div>
    <div className="trade-content reveal">
        <div className="chart-content">
          <div className="heading">
            What Is BetterSwap?
          </div>
          <div className="sub-heading">
            The <span className="highlight">BETTER</span> way to swap..
          </div>
          <div className="content">
            <p><span className="highlight">BetterSwap</span> is a Decentralized Exchange (DEX) redesigned, rebuilt and reshaped from the ground up to solve some of the enormous problems in DeFi.</p>
            <p>Unlike other DEX's <span className="highlight">BetterSwap</span> is not just a reskined fork of previously existing solutions to DeFi exchanges,
            rather we aim to solve some of the major problems plaguing these solutions while retaining their best parts and making them...<span className="highlight">BETTER</span>.</p>
            <p><span className="highlight">BetterSwap</span> offers,</p><ul> <li>Ability for projects/protocols to reach their true potential with treasury building</li>
            <li>Price stabilization with Stable Coin Pools</li>
            <li>Protection for the investors with community owned liquidity</li>
            <li>0 trading fee for investors</li></ul>
            <p className="sub-heading highlight" style={{textAlign:"center"}}>The Better DeFi Awaits</p>
            <a href="https://app.betterswap.fi/"><div className="sub-heading btn-launch" style={{textAlign:"center"}}>Launch App</div></a>
          </div>
        </div>
        
    </div>
    <div className="trade-content reveal">
        <div className="chart-content">
          <div className="heading">
            How Can BetterSwap Help Your Project?
          </div>
          <div className="sub-heading">
            With <span className="highlight">BetterSwap</span> you can build and grow your project <span className="highlight">BETTER</span>
          </div>
          <div className="content">
            <p>Modern DeFi projects/protocols suffer from a severe case of little to no funds for further development of their project and getting the exposure they deserve after they launch. Thus, to tackle this issue and grow the project treasury, taxes are introduced on every transaction which leads to many other problems such as excessive dumping since these taxes need to be sold to the liquidity pool inorder to be used, investor backlash and eventually leading to an unfortuante early death of the project/protocol.</p>
            <p>With  <span className="highlight">BetterSwap</span> you can grow your treasury with the taxes without hurting the price of the project/protocol as all the <span className="highlight">taxes are collected on the Liquidity Pool Level as USD before the swap takes place and transfered automatically to project developers</span>, as opposed to selling the treasury to the Liquidity Pool for USD or any other crypto of choice.</p>
          </div>
          <p className="sub-heading"><span className="highlight">Better</span> Protection From Price Fluctuations</p>
          <div className="content">
              <p>With <span className="highlight">BetterSwap</span> you can expect the prices of your project/protocol more stabilized and less prone to fluctuations as all pairs on the platform are with a stable coin such as BUSD,USDC,USDT..etc</p>
          </div>
          <p className="sub-heading highlight" style={{textAlign:"center"}}>Docs for Better information</p>
            <a href="https://app.betterswap.fi/"><div className="sub-heading btn-launch" style={{textAlign:"center"}}>Read Docs</div></a>
        </div>
        
    </div>
    <div className="trade-content reveal">
        <div className="chart-content">
          <div className="heading">
            How Can BetterSwap Help Investors?
          </div>
          <div className="sub-heading">
            With <span className="highlight">BetterSwap</span> you the investor have <span className="highlight">BETTER</span> protection and a <span className="highlight">BETTER</span> swap experience
          </div>
          <div className="content">
            All the liquidity added in any of the pools on <span className="highlight">BetterSwap is automatically locked for an indefinite amount of time and cannot be removed without the consent of the investors</span>.
          </div>
          <div className="content">
            <p><span className="highlight">BetterSwap</span> enables the liquidity to be truly owned by the community, once your investment in a project/protocol launched on <span className="highlight">BetterSwap</span> is over a threshold set by the project/protocol owners you are rewarded with a DAO Token for the said pool.</p>
            <p>Every investor holding this DAO Token has 1 vote which decides if the liquidity is to be removed from the pool or not. You as an investor on the <span className="highlight">BetterSwap</span> platform can rest easy knowing the liquidity cannot be pulled without investor consent.</p>
          </div>
          <p className="sub-heading highlight" style={{textAlign:"center"}}>Docs for Better information</p>
            <a href="https://app.betterswap.fi/"><div className="sub-heading btn-launch" style={{textAlign:"center"}}>Read Docs</div></a>
        </div>
        
    </div>
    </>
  );
}

export default App;

import { GoBell } from 'react-icons/go';
import { GoCloudDownload } from 'react-icons/go';
import { GoDatabase } from 'react-icons/go';
import Button from "../components/Button";

function ButtonPage () {
    const handleClick = () => {
        console.log('clicked')
    }

    return ( 
    <div>
        <div>
            <Button rounded secondary className="mb-5" onClick={handleClick}>
                Click Me
            </Button>
        </div>
        <div>
            <Button danger>
                <GoBell />
                Buy Now
            </Button>
        </div>
        <div>
            <Button warning>
                <GoCloudDownload />
                See Deal
            </Button>
        </div>
        <div>
            <Button primary>Hide Ads</Button>
        </div>
        <div>
            <Button primary rounded>
                <GoDatabase />
                Complete
            </Button>
        </div>
    </div>
)}

export default ButtonPage;
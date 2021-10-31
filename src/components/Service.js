import React from 'react'
import Card from '@material-tailwind/react/Card'
import CardBody from '@material-tailwind/react/CardBody'
import CardFooter from '@material-tailwind/react/CardFooter'
import CardHeader from '@material-tailwind/react/CardHeader'
import Button from '@material-tailwind/react/Button'
import * as Icons from 'react-bootstrap-icons'
import Tittle from './Tittle'

function Service() {
  return (
    <div className="container mx-auto lg:w-4/5 w-auto" id="services">
      <Tittle text="Services" />
      <div className="flex justify-center space-y-12 items-center mt-20 space-x-3 lg:space-x-4 pb-8 flex-col lg:flex-row lg:space-y-0">
        <div className="w-10/12 transform hover:scale-100  mx-auto lg:mx-0 lg:w-4/12 hover:shadow-new transition-shadow duration-500 ease-linear ">
          <Card>
            <CardHeader color="purple" iconOnly>
              <Icons.Stack size="50px" />
            </CardHeader>
            <CardBody>
              <h4 className="text-2xl font-bold font-sans uppercase">
                Web Development
              </h4>
              <p>
                Writting clean and readeable code to bring design to life.
                Creating a scaleable and responsive websites. Using the front
                end technologies like React framework and tailwindcss to make a
                mobile first website.
              </p>
            </CardBody>
            <CardFooter>
              <Button
                buttonType="link"
                ripple="dark"
                color="purple"
                onClick={() => location.assign('#contact')}
              >
                Contact
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="w-10/12 mx-auto lg:mx-0 lg:w-4/12 hover:shadow-new transition-shadow duration-500 ease-linear">
          <Card>
            <CardHeader color="purple" iconOnly>
              <Icons.Phone size="50px" />
            </CardHeader>
            <CardBody>
              <h4 className="text-2xl font-bold font-sans uppercase">
                App Developments
              </h4>
              <p>
                Bringing mobile design to life by creating cross platform mobile
                app with React-Native, expo and other front-end tecnologies.
                Gathering clients issues and producing clean and readeable code
                to handle and solve it.
              </p>
            </CardBody>
            <CardFooter>
              <Button
                buttonType="link"
                ripple="dark"
                color="purple"
                onClick={() => location.assign('#contact')}
              >
                Contact
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="w-10/12 mx-auto lg:mx-0 lg:w-4/12 hover:shadow-new transition-shadow duration-500 ease-linear">
          <Card>
            <CardHeader color="purple" iconOnly>
              <Icons.CloudCheckFill size="60px" />
            </CardHeader>
            <CardBody>
              <h4 className="text-2xl font-bold font-sans uppercase">
                Database Storage
              </h4>
              <p>
                Using the known version control git to store file on github
                .Team work always requires storage before sharing. Storage and
                uploading code is always required for easy work.
              </p>
            </CardBody>
            <CardFooter>
              <Button
                buttonType="link"
                ripple="dark"
                color="purple"
                onClick={() => location.assign('#contact')}
              >
                Contact
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Service

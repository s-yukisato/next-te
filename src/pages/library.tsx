import type { NextPage } from 'next'
import Image from 'next/image'
import classes from '~/styles/home/Book.module.scss'

type Props = {
    title: string,
    image: string
    description?: string,
    evaluation: string,
    price: number,
}

const props: Props = {
    title: 'Book',
    image: "https://user-images.githubusercontent.com/83949146/137431528-58550bc1-13a9-4652-8517-8d98fced09ff.png",
    description: "This is the description. You can get more information about this book.",
    evaluation: "3",
    price: 1600
}

const Home: NextPage = () => {
    const {title, image, description, price} = props;
    const handleClick = () => console.log("hello")
  return (
    <div className={classes.container}>
        <div className={classes.grid}>
            <div className={classes.card}>
                <div className={classes.image}>
                    <Image src="/before.jpg" width="212px" height="300px" alt="No data" />
                </div>
                <div className={classes.information}>
                    <h6 className={classes.title}>{title}</h6>
                    <p className={classes.description}>{description}</p>
                    <p className={classes.price}>￥{price}</p>
                    <button className={classes.button} onClick={handleClick}>
                        check
                    </button>
                </div>
            </div>

            <div className={classes.card}>
                <div className={classes.image}>
                    <Image src="/before.jpg" width="212px" height="300px" alt="No data" />
                </div>
                <div className={classes.information}>
                    <h6 className={classes.title}>{title}</h6>
                    <p className={classes.description}>{description}</p>
                    <p className={classes.price}>￥{price}</p>
                    <button className={classes.button} onClick={handleClick}>
                        check
                    </button>
                </div>
            </div>

            <div className={classes.card}>
                <div className={classes.image}>
                    <Image src="/before.jpg" width="212px" height="300px" alt="No data" />
                </div>
                <div className={classes.information}>
                    <h6 className={classes.title}>{title}</h6>
                    <p className={classes.description}>{description}</p>
                    <p className={classes.price}>￥{price}</p>
                    <button className={classes.button} onClick={handleClick}>
                        check
                    </button>
                </div>
            </div>

            <div className={classes.card}>
                <div className={classes.image}>
                    <Image src="/before.jpg" width="212px" height="300px" alt="No data" />
                </div>
                <div className={classes.information}>
                    <h6 className={classes.title}>{title}</h6>
                    <p className={classes.description}>{description}</p>
                    <p className={classes.price}>￥{price}</p>
                    <button className={classes.button} onClick={handleClick}>
                        check
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home

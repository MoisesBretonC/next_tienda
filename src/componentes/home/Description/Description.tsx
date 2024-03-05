import styles from './Description.module.sass';
import Image from 'next/image';

export const Description = () => {
    return (
        <section>
            <img
             src="/images/terreneitor.jpg" 
             alt='Products marketplace'
             width={500}
             height={300}
            //  priority={false}
            // quality={100}
             />
            <h2>Description</h2>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt possimus iusto harum, quam maiores sapiente? Harum vero assumenda quae! Iste ducimus quae tempore cupiditate itaque autem corporis laboriosam officia maiores.</p>
        </section>
    )
}
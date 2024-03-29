import { SelectedPage } from '@/shared/types';
import Link from './Link';

type Props = {
    selectedPage: SelectedPage;
  setSelectedPage:  (value: SelectedPage) =>void;
}

function Menu({ selectedPage, setSelectedPage}: Props) {
  return (
    <>
    <Link 
            page="Home" 
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link 
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link 
                page="Our Clasees" 
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link 
                page="Contact Us" 
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
             </>
  )
}

export default Menu
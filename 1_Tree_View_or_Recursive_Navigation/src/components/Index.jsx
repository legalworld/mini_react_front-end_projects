import MenuList from "./menu-list";
import "./styles.css";
export default function TreeView({ menus = [] }) {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
}

/*

if you look at the dataset, you will notice, there is three parent menus...
so my normal rendering logic of lists is only remdering three items... 
but it's not checking that whether there is child menus are availabe or not for that parent, if it's available then we have 
to recursively call the same component...

! now how to do it ???
==>
  for doing it, all the logic we will write in the MenuItem component...


*/

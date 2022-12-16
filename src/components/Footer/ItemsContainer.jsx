import Item from "./Item";
import { ABOUT, CATEGORY, COMPANY, CONTACT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={ABOUT} title="ABOUT" />
      <Item Links={CATEGORY} title="CATEGORY" />
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={CONTACT} title="CONTACT" />
    </div>
  );
};

export default ItemsContainer;

import type { Metadata } from "next";
import Contacts from "../../components/contacts/ContactsContactsPage/ContactsContactsPage";
import Media from "../../components/contacts/Media/Media";

export const metadata: Metadata = { title: "Contacts" };

const page = () => {
  return (
    <>
      <Contacts />
      <Media />
    </>
  );
};

export default page;

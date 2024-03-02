import { Field, Form, Formik } from "formik";
import { IoSearchSharp } from "react-icons/io5";

import css from "./SearchBar.module.css";

export default function SearchBar ({value, onSearch}) {
    return (
        <header className={css.header}>
            <Formik initialValues={{search: value}} onSubmit={() => {onSearch}}>
                <Form>
                    <button className={css.button} type="submit"><IoSearchSharp/></button>
                    <Field name="search"></Field>
                </Form>
            </Formik>
        </header>
    );
}
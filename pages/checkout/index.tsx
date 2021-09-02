import Image from "next/image";
import Link from "next/link";
import React from "react";
import CheckoutConfirmation from "../../components/organisms/CheckoutConfirmation";
import CheckoutDetail from "../../components/organisms/CheckoutDetail";
import CheckoutItem from "../../components/organisms/CheckoutItem";

export default function Checkout() {
  return (
    <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
      <div className="container-fluid">
        <div className="logo text-md-center text-start pb-50">
          <Link href="#">
            <a className="">
              <Image src="/icon/logo.svg" width={60} height={60} />
            </a>
          </Link>
        </div>
        <CheckoutItem />
        <hr />
        <CheckoutDetail />
        <CheckoutConfirmation />
      </div>
    </section>
  );
}

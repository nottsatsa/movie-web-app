import { BsFilm } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLocalPhone } from "react-icons/md";

export const Footer = ({}) => {
  return (
    <footer className="w-full h-fit py-10 flex flex-col items-start justify-center bg-indigo-700">
      <div className="w-full flex md:flex-row flex-col justify-between lg:px-10">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <BsFilm color="#FAFAFA" />
            <h6 className="text-[#FAFAFA] font-[700] italic">Movie Z</h6>
          </div>
          <p className="text-sm font-[400] text-[#FAFAFA]">
            © 2024 Movie Z. All Rights Reserved.
          </p>
        </div>
        <div className="flex flex-row justify-end items-start">
          <div className="flex flex-col h-50 items-start gap-3">
            <p className=" text-sm font-[400] text-[#FAFAFA]">
              Contact Information
            </p>
            <div className="flex flex-col items-start gap-6">
              <div className="flex items-center gap-3">
                <HiOutlineMail size={16} color="#FAFAFA" />
                <div className="flex flex-col">
                  <p className="text-sm text-[#fafafa] font-[500]">Email:</p>
                  <p className="text-sm text-[#fafafa] font-[400]">
                    support@movieZ.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MdOutlineLocalPhone size={16} color="#FAFAFA" />
                <div className="flex flex-col">
                  <p className="text-sm text-[#fafafa] font-[500]">Phone:</p>
                  <p className="text-sm text-[#fafafa] font-[400]">
                    +976 (11) 123-4567
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3">
            <p className="text-sm font-[400] text-[#fafafa]">Follow us </p>
            <div className="flex sm:flex-row flex-col items-center gap-3 text-[#fafafa] text-sm font-[500]">
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter</p>
              <p>Youtube</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

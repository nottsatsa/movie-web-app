"use client";
import { useState, useEffect } from "react";
import axios from "axios";
// import React, { useState } from "react";
import { use } from "react"; // Next.js 14+ хувилбарт хэрэгтэй
import { Footer } from "@/components/Footer";
import { MoviesList } from "@/components/MoviesList";
import { Navigation } from "@/components/Navigation";

import { useRouter } from "next/navigation";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { seteuid } from "process";

interface SeeMoreProps {
  params: Promise<{ seeMore: string; movieId: string }>;
}

export default function SeeMore({ params }: SeeMoreProps) {
  const { seeMore } = use(params);
  const [seeMoreState, setSeeMoreState] = useState(seeMore);

  const [pageNumber, setPageNumber] = useState(1);

  const router = useRouter();
  const clickPlus = () => {
    setPageNumber(pageNumber + 1);
  };

  const clickNega = () => {
    {
      if (pageNumber >= 1) {
        setPageNumber(pageNumber - 1);
      }
    }
  };

  // const listStatusValue = /\d/.test(seeMore) ? `${movieId}/similar` : seeMoreState;

  const countNumbers = (text: string): number => {
    const matches = text.match(/\d/g);
    return matches ? matches.length : 0;
  };
  console.log(countNumbers(seeMore));

  return (
    <div className="px-20">
      {seeMoreState}
      <Navigation />
      <MoviesList
        // listStatus={seeMoreState}
        // listStatus={listStatusValue}
        listStatus={
          /\d/.test(seeMore) ? `${countNumbers(seeMore)}/similar` : seeMoreState
        }
        listStatusName="More like this"
        tav={false}
        pageNo={`${pageNumber}`}
      />
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={clickNega} />
          </PaginationItem>
          <PaginationItem>
            {pageNumber <= 4 ? (
              <PaginationEllipsis className="hidden" />
            ) : (
              <PaginationEllipsis />
            )}
          </PaginationItem>
          <PaginationItem>
            {pageNumber <= 4 ? (
              <PaginationEllipsis className="hidden" />
            ) : (
              <PaginationEllipsis />
            )}
          </PaginationItem>
          <PaginationItem>
            {pageNumber === 1 ? (
              <PaginationLink className="hidden" onClick={clickNega}>
                {pageNumber - 1}
              </PaginationLink>
            ) : (
              <PaginationLink onClick={clickNega}>
                {pageNumber - 1}
              </PaginationLink>
            )}

            <PaginationLink>{pageNumber}</PaginationLink>
            <PaginationLink onClick={clickPlus}>
              {pageNumber + 1}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext onClick={clickPlus} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <Footer />
    </div>
  );
}

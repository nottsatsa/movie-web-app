"use client";

import React, { useState } from "react";
import { use } from "react"; // Next.js 14+ хувилбарт хэрэгтэй
import { Footer } from "@/components/Footer";
import { MoviesList } from "@/components/MoviesList";
import { Navigation } from "@/components/Navigation";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface SeeMoreProps {
  params: Promise<{ seeMore: string }>; // params нь Promise тул `use` ашиглана
}

export default function SeeMore({ params }: SeeMoreProps) {
  const { seeMore } = use(params); // `use` ашиглаж `params`-ийг задалж байна
  const [seeMoreState, setSeeMoreState] = useState(seeMore);

  return (
    <div className="px-20">
      {seeMoreState}
      <Navigation />
      <MoviesList
        listStatus={seeMoreState}
        listStatusName="More like this"
        tav={false}
      />
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <Footer />
    </div>
  );
}

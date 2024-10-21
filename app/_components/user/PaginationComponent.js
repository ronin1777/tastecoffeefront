// PaginationComponent.jsx
'use client';

import Pagination from '@mui/material/Pagination';
import Link from 'next/link';
import {PaginationItem} from "@mui/material";

export default function PaginationComponent({ currentPage, totalPages }) {
    return (
        <Pagination
            count={totalPages}
            page={currentPage}
            variant="outlined"
            shape="rounded"
            color="primary"
            renderItem={(item) => (
                <Link href={`?page=${item.page}`} passHref>
                    <PaginationItem
                        {...item}
                        disabled={item.page < 1 || item.page > totalPages} // غیرفعال کردن دکمه‌ها در صورت عدم وجود صفحه
                    />
                </Link>
            )}
        />
    );
}
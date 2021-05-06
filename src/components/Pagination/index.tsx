import { Stack, Button, Box } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange
}: PaginationProps) {
  
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

  const previousPages = currentPage > 1
    ? {...new Array(siblingsCount)}
    : [];


  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack
        direction="row"
        spacing="2"
      >
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
      </Stack>
    </Stack>
  )
}
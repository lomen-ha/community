import axios from 'axios';
import useSWR from 'swr';

const fetcher = (...args) => axios.get(...args).then((res) => res.data);

export function BestBoardData() {
  const { data, error } = useSWR(`/api/best/`, fetcher);

  return {
    bestBoardData: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function BestDetailBoardData(id) {
  const { data, error } = useSWR(`/api/best/${id}`, fetcher);

  return {
    bestDetailBoardData: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function LatestBoardData() {
  const { data, error } = useSWR(`/api/latest/`, fetcher);

  return {
    latestBoardData: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function LatestDetailBoardData(id) {
  const { data, error } = useSWR(`/api/latest/${id}`, fetcher);

  return {
    latestDetailBoardData: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function ArtistBoardData() {
  const { data, error } = useSWR(`/api/artist/`, fetcher);

  return {
    artistBoardData: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function ArtistDetailBoardData(id) {
  const { data, error } = useSWR(`/api/artist/${id}`, fetcher);

  return {
    artistDetailBoardData: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function GoodsBoardData() {
  const { data, error } = useSWR(`/api/goods/`, fetcher);

  return {
    goodsBoardData: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function GoodsDetailBoardData(id) {
  const { data, error } = useSWR(`/api/goods/${id}`, fetcher);

  return {
    goodsDetailBoardData: data,
    isLoading: !error && !data,
    isError: error,
  };
}

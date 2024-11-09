import { Chapter } from '@models/chapter';
import { Plotline } from '@models/plotline';

export const MOCK_CHAPTERS: Chapter[] = [
  { id: '3f6d5a4c-9e8b-4d7f-8c2a-1b3e5d7f9a0c', name: 'Chapter 1' },
  { id: '2d1e0f9a-8b7c-6d5e-4f3a-2c1b0d9e8f7a', name: 'Chapter 2' },
  { id: '1a0b9c8d-7e6f-5a4b-3c2d-1e0f9a8b7c6d', name: 'Chapter 3' },
  { id: '456e7f89-9bcd-3210-ab12-c34567890123', name: 'Chapter 4' },
  { id: '567890ab-cdef-4123-9876-543210fedcba', name: 'Chapter 5' },
  { id: '6d7e8f90-ab12-3456-7890-1234567890ab', name: 'Chapter 6' },
  { id: '78901234-5678-90ab-cdef-1234567890ab', name: 'Chapter 7' },
  { id: '89abcdef-0123-4567-89ab-cdef12345678', name: 'Chapter 8' },
  { id: '90abcdef-0123-4567-89ab-cdef12345678', name: 'Chapter 9' },
  { id: 'abcdef12-3456-7890-ab12-cdef12345678', name: 'Chapter 10' },
  { id: 'bf14f234-5678-90ab-cdef-1234567890ab', name: 'Chapter 11' },
  { id: 'a1b2c3d4-5678-90ab-cdef-1234567890ab', name: 'Chapter 12' },
  { id: 'bcde1234-5678-90ab-cdef-1234567890ab', name: 'Chapter 13' },
  { id: 'cdef1234-5678-90ab-cdef-1234567890ab', name: 'Chapter 14' },
  { id: 'd1e2f3g4-h5i6-j7k8-l9m0-n1o2p3q4r5s6', name: 'Chapter 15' },
];

export const MOCK_DATA: Plotline[] = [
  {
    id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
    name: 'plotline 1',
    scenes: {
      '3f6d5a4c-9e8b-4d7f-8c2a-1b3e5d7f9a0c': [
        { id: '1', description: 'description' },
        { id: '2', description: 'description' },
        { id: '3', description: 'description' },
      ],
      '1a0b9c8d-7e6f-5a4b-3c2d-1e0f9a8b7c6d': [{ id: '1', description: 'description' }],
    },
  },
  { id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479', name: 'plotline 2', scenes: {} },
  {
    id: '550e8400-e29b-41d4-a716-446655440000',
    name: 'plotline 3',
    scenes: { '3f6d5a4c-9e8b-4d7f-8c2a-1b3e5d7f9a0c': [{ id: '1', description: 'description' }] },
  },
  {
    id: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
    name: 'plotline 4',
    scenes: { '2d1e0f9a-8b7c-6d5e-4f3a-2c1b0d9e8f7a': [{ id: '1', description: 'description' }] },
  },
  { id: '7c9e6679-7425-40de-944b-e07fc1f90ae7', name: 'plotline 5', scenes: {} },
  { id: '8f14e45f-ceea-467a-9575-6380c0d40167', name: 'plotline 6', scenes: {} },
  { id: 'a1a2a3a4-b1b2-c1c2-d1d2-e1e2e3e4e5e6', name: 'plotline 7', scenes: {} },
  { id: 'b3ba141a-a776-4480-920f-e3bb457a5881', name: 'plotline 8', scenes: {} },
  {
    id: 'c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r8',
    name: 'plotline 9',
    scenes: { '1a0b9c8d-7e6f-5a4b-3c2d-1e0f9a8b7c6d': [{ id: '1', description: 'description' }] },
  },
  { id: 'd1e2f3g4-h5i6-j7k8-l9m0-n1o2p3q4r5s6', name: 'plotline 10', scenes: {} },
  { id: 'e2f3g4h5-i6j7-k8l9-m0n1-o2p3q4r5s6t7', name: 'plotline 11', scenes: {} },
  { id: 'f3g4h5i6-j7k8-l9m0-n1o2-p3q4r5s6t7u8', name: 'plotline 12', scenes: {} },
  { id: 'g4h5i6j7-k8l9-m0n1-o2p3-q4r5s6t7u8v9', name: 'plotline 13', scenes: {} },
  { id: 'h5i6j7k8-l9m0-n1o2-p3q4-r5s6t7u8v9w0', name: 'plotline 14', scenes: {} },
  { id: 'i6j7k8l9-m0n1-o2p3-q4r5-s6t7u8v9w0x1', name: 'plotline 15', scenes: {} },
  {
    id: 'j7k8l9m0-n1o2-p3q4-r5s6-t7u8v9w0x1y2',
    name: 'plotline 16',
    scenes: { '1a0b9c8d-7e6f-5a4b-3c2d-1e0f9a8b7c6d': [{ id: '1', description: 'description' }] },
  },
  {
    id: 'k8l9m0n1-o2p3-q4r5-s6t7-u8v9w0x1y2z3',
    name: 'plotline 17',
    scenes: { '2d1e0f9a-8b7c-6d5e-4f3a-2c1b0d9e8f7a': [{ id: '1', description: 'description' }] },
  },
  { id: 'l9m0n1o2-p3q4-r5s6-t7u8-v9w0x1y2z3a4', name: 'plotline 18', scenes: {} },
  {
    id: 'm0n1o2p3-q4r5-s6t7-u8v9-w0x1y2z3a4b5',
    name: 'plotline 19',
    scenes: { '1a0b9c8d-7e6f-5a4b-3c2d-1e0f9a8b7c6d': [{ id: '1', description: 'description' }] },
  },
  {
    id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
    name: 'plotline 20',
    scenes: { 'd1e2f3g4-h5i6-j7k8-l9m0-n1o2p3q4r5s6': [{ id: '1', description: 'description' }] },
  },
];

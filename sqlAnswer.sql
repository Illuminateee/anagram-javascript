-- misal memiliki table parent dan table siswa

SELECT siswa.id, siswa.name, parent.name FROM siswa
LEFT JOIN parent ON siswa.id_parent = parent.id

-- menggunakan left join agar null terbaca
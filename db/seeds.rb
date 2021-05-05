# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Film.create([{ name: 'Star Wars: Attack Of The Clones',category: 'Action/Adventure',release: 2002,img:'https://images.squarespace-cdn.com/content/v1/56b43c0a27d4bd06b908e249/1476860201082-TNXEJ2A2FSG21MCABRL0/ke17ZwdGBToddI8pDm48kEqvkmAUcirPPIKpqbTUg0J7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URaDNx4IeIra4GgY2CyyRbbfU84Dqb5MM9_xa87hVqXRKqNTPn6fcWWFIP0Zrewjew/Attack-Poster.jpg?format=2500w',trailer: 'https://www.youtube.com/watch?v=gYbW1F_c9eM'},
  { name: 'Star Wars: Revenge Of The Sith',category: 'Action/Adventure',release: 2005,img:'https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_.jpg',trailer: 'https://www.youtube.com/watch?v=NkWgoPRT2Cs'},
  { name: 'Star Wars: Attack Of The Phantom Menace',category: 'Action/Adventure',release: 1998,img:'https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',trailer: 'https://www.youtube.com/watch?v=bD7bpG-zDJQ'}])
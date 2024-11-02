if [ -d "build" ]; then
  rm -rf build
fi

mkdir build 

cd build

cmake ..

make -j4

make install

cd /usr/local/bin

./hello-world
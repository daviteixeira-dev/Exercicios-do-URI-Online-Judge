#include <iostream>
 
using namespace std;
 
int main() {
 
    int i, j;
    
    for(i = 1; i <=9; i=i+2)
        for(j = i+6; j >= i+4; j = j-1)
            cout << "I=" << i << " J=" << j <<endl;
 
    return 0;
}
#include <iostream>
#include <stack>
using namespace std;

int main(int argc, char const *argv[])
{
    string word;
    cin >> word;
    char ch = 'd';
    int index = -1;

    for (int i = 0; i < word.length(); i++)
    {
        if (word[i] == ch)
        {
            index = i;
            break;
        }
    }
    if (index == -1)
    {
        
    }
    else{
        int index_a = index;
        stack<string> revIndex;
        string leftIndex_x;
        // string result = revIndex + leftIndex_x;
        for (int i = 0; i <= index; i++)
        {
            revIndex.push(word[index_a]);
            index_a--;
        }

        int leftIndex = word.length() - (index+1);

        for (int i = 1; i <= leftIndex; i++)
        {
            leftIndex = word[index+i];
        }

        
    }
    
}

<tr>
<td class="header">
<a href="{{ $url }}" style="display: inline-block;">
@if (trim($slot) === 'Laravel')
<img src="https://ew-pot.com/images/logo.png" class="logo" alt="EWPOT">
@else
{{ $slot }}
@endif
</a>
</td>
</tr>
